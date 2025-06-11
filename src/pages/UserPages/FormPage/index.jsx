import './index.scss'
import FormBanner from "../../../sections/FormSections/FormBanner/index.jsx";
import FormInputs from "../../../sections/FormSections/FormInputs/index.jsx";

function FormPage() {
    return (
        <div className={"formPage"}>
            <FormBanner/>
            <FormInputs/>
        </div>
    );
}

export default FormPage;