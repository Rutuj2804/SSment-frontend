import { useState } from "react";

interface CsvRow {
	firstname: string;
	lastname: string;
	email: string;
}

const useCsvReader = () => {
	const [data, setData] = useState<CsvRow[]>([]);
	const [error, setError] = useState<string | null>(null);

	const parseCsv = (file: File) => {
		const reader = new FileReader();
		reader.onload = (event) => {
			const text = event.target?.result as string;
			const rows = text.split("\n");
			const headers = rows[0].split(",");
			const csvData: CsvRow[] = [];
			for (let i = 1; i < rows.length; i++) {
				const rowData = rows[i].split(",");
				if (rowData.length === headers.length) {
					const obj: any = {};
					let hasEmptyColumn = false;
					headers.forEach((header, index) => {
						const value = rowData[index].trim();
						if (!value) {
							hasEmptyColumn = true;
							setError(`Empty value found in column '${header.trim()}' in row ${i}`);
						}
						obj[header.toLowerCase().trim()] = value;
					});
					if (!hasEmptyColumn) {
						csvData.push(obj);
					}
				}
			}
			setData(csvData);
		};
		reader.readAsText(file);
	};

	return { data, error, parseCsv };
};

export default useCsvReader;
