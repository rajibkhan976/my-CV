import { NextRequest } from "next/server";
import puppeteer from "puppeteer";

const saveAsPdf = async (url: string) => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	await page.goto(url, {
		waitUntil: "networkidle0",
	});

	const result = await page.pdf({
		format: "a4",
		printBackground: true,
		margin: { top: "1cm", right: "1cm", bottom: "1cm", left: "1cm" },
	});
	await browser.close();

	return result;
};

export async function POST(request: NextRequest) {
	try {
		const data = await request.json();
		const { url } = data;

		const pdf = await saveAsPdf(url as string);

		return new Response(pdf, {
			headers: {
				"Content-Type": "application/pdf",
				"Content-Disposition": 'attachment;"',
			},
		});
	} catch (error) {
		console.error("Error generating PDF:", error);
		return new Response(null, {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
}
