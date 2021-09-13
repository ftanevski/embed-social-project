import getSubmissions from "./getSubmissions";

let formattedData = async () => {
	let submissions = await getSubmissions();

	for (let submission of submissions) {
		submissions.form_type = submissions.form.form_type;
		submissions.form = submissions.form.name;
	}

	return data;
}

export default formattedData;