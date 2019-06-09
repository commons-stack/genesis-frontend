/**
 * Created by will on 12/04/19.
 */
import React from 'react';
import FormField from '../../../stateless-components/FormField';

const CampaignParametersForm = ({ submitCampaignParameters }) => {
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");


    return (<form className="control">
        <FormField
            placeholder="Organisation name"
            setValue={(name) => setName(name)}
            value={name}
            labelText="What is the name of your organisation?"
        />
        <FormField
            placeholder="Description..."
            setValue={(description) => setDescription(description)}
            value={description}
            labelText="Describe your community, organisation or commons"
        />
        <div className="space-holder"/>
        <button className="button is-primary" onClick={() => submitCampaignParameters(name, description)}>
      Continue
        </button>
    </form>);
};

export default CampaignParametersForm;
