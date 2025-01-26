import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";

export const saveAsPdf = async (url: string) => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	await page.goto(url, {
		waitUntil: "networkidle0",
	});

	const result = await page.pdf({
		format: "a4",
	});
	await browser.close();

	return result;
};

export async function POST(req: NextRequest) {
	const data = await req.json();
	const { url } = data;

	const pdf = await saveAsPdf(url as string);
	const headers = new Headers();

	headers.append("Content-Disposition", "attachment;");
	headers.append("Content-Type", "application/pdf");

	const options = { status: 200, statusText: "Pdf generated :)" };

	if (!pdf) {
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}

	return new Response(pdf, {
		headers,
		...options,
	});
}
