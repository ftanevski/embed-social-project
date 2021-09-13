import getSubmissions from "./getSubmissions";

let formattedData = async () => {
	let submissions = await getSubmissions();

	for (let submission of submissions) {
		submission.form_type = submission.form.form_type;
		submission.form = submission.form.name;
	}

	return data;
}

export default formattedData;