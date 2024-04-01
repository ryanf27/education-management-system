import Dashboard from "../Dashboard";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";

const Create = ({ assignments, student_id }) => {
    const { data, setData, post, errors } = useForm({
        assignment_id: "",
        file: null,
        student_id: student_id,
    });

    const handleFileChange = (event) => {
        setData("file", event.target.files[0]);
    };

    const handleChange = (event) => {
        setData(event.target.id, event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("assignment_id", data.assignment_id);
        formData.append("file", data.file);
        formData.append("student_id", data.student_id);

        post(route("submissions.store"), formData, {
            forceFormData: true,
            onError: (e) => console.log(e),
        });
    };

    return (
        <Dashboard>
            <div className="max-w-4xl mx-auto py-10">
                <h2 className="text-2xl font-semibold mb-5">
                    Create Submission
                </h2>
                <form
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                    className="space-y-8"
                >
                    <InputLabel
                        htmlFor="assignment_id"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Assignment
                    </InputLabel>
                    <SelectInput
                        id="assignment_id"
                        value={data.assignment_id}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select an assignment</option>
                        {assignments.map((assignment) => (
                            <option key={assignment.id} value={assignment.id}>
                                {assignment.title}
                            </option>
                        ))}
                    </SelectInput>

                    <InputLabel
                        htmlFor="file"
                        className="block text-sm font-medium text-gray-700"
                    >
                        File
                    </InputLabel>
                    <TextInput
                        type="file"
                        id="file"
                        onChange={handleFileChange}
                        required
                    />

                    <PrimaryButton type="submit">Submit</PrimaryButton>
                </form>
            </div>
        </Dashboard>
    );
};

export default Create;
