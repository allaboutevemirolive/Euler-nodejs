const { chromium } = require('playwright');
const fs = require('fs');

async function scrapeData(pageNumber) {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(`https://projecteuler.net/archives;page=${pageNumber}`);

    const data = await page.evaluate(() => {
        const problems = [];
        const trElements = document.querySelectorAll('tr');

        for (const tr of trElements) {
            const tdElements = tr.querySelectorAll('td');

            if (tdElements.length === 3) {
                const problemNumber = tdElements[0].textContent.trim();
                const problemTitle = tdElements[1].textContent.trim();

                problems.push({
                    number: problemNumber,
                    title: problemTitle,
                });
            }
        }

        return problems;
    });

    await browser.close();

    // Convert the scraped data to human-readable format
    const humanReadableData = data.map((problem) => {
        return `Problem ${problem.number}: ${problem.title}`;
    });

    return humanReadableData;
}

async function scrapeAllPages() {
    const totalPages = 17;
    const allData = [];

    for (let i = 1; i <= totalPages; i++) {
        const data = await scrapeData(i);
        allData.push(...data);
    }

    return allData;
}

scrapeAllPages()
    .then((data) => {
        const output = data.join('\n');

        fs.writeFile('output.txt', output, (err) => {
            if (err) {
                console.error('Error writing to file:', err);
            } else {
                console.log('Output saved to output.txt');
            }
        });
    })
    .catch((error) => {
        console.error('Error:', error);
    });
