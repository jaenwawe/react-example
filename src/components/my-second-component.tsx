import * as React from 'react';

/**
 * This is an example of a function component.
 * A function component is a component consisting of
 * a single function, that is the render method.
 *
 */
const SecondComponent: React.FC = () => {
    return (


        <div id="reimbursement-main-container">
            <p>Reimbursement Data</p>

            <div>  Name</div>
            <input type="text" id="reimbursement_id" name="reimbursement_model" />

            <div>Author: </div>
            <input type="text" id="author" name="author_number" />

            <div>Amount:</div>
            <input type="text" id="reimbursement_amount" />

            <div>Date Submitted:</div>
            <input type="date" id="date_submitted" />

            <div>Date Resolved:</div>
            <input type="date" id="date_resolved" />

            <div>Description:</div>
            <input type="text" id="description" />

            <div>Description:</div>
            <input type="text" id="resolver" />
            <div>Status:</div>
            <input type="text" id="status" />                                        <div>
                <div>Type:</div>
                <input type="text" id="type" />

                <div id="submit-form-user">Submit</div>
                <input type="text" id="submit-input-user" />
                <button id="submit-reimbursement">Request Reimbursement</button>
            </div>
        </div>
    );
}

export default SecondComponent;