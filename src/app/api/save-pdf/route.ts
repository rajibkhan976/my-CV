import { NextRequest, NextResponse } from "next/server";
// import puppeteer from "puppeteer";

const saveAsPdf = async (url: string) => {
	const browser = await puppeteer.launch({
		args: [...chromium.args, "--hide-scrollbars", "--disable-web-security"],
		defaultViewport: chromium.defaultViewport,
		executablePath: await chromium.executablePath(),
		headless: chromium.headless,
		ignoreHTTPSErrors: true,
	});
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

// export async function POST(req: NextRequest) {
// 	const data = await req.json();
// 	const { url } = data;

// 	const pdf = await saveAsPdf(url as string);
// 	const headers = new Headers();

// 	headers.append("Content-Disposition", "attachment;");
// 	headers.append("Content-Type", "application/pdf");

// 	const options = { status: 200, statusText: "Pdf generated :)" };

// 	if (!pdf) {
// 		return NextResponse.json(
// 			{ error: "Internal Server Error" },
// 			{ status: 500 }
// 		);
// 	}

// 	return new Response(pdf, {
// 		headers,
// 		...options,
// 	});
// }

const chromium = require("@sparticuz/chromium-min");
const puppeteer = require("puppeteer-core");

async function getBrowser() {
	return puppeteer.launch({
		args: [...chromium.args, "--hide-scrollbars", "--disable-web-security"],
		defaultViewport: chromium.defaultViewport,
		executablePath: await chromium.executablePath(),
		headless: chromium.headless,
		ignoreHTTPSErrors: true,
	});
}

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
		return new Response(JSON.stringify({ error: "Failed to generate PDF" }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
}
