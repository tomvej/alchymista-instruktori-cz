import React from 'react';
import {Form} from 'react-final-form';
import {FormField, StringInput} from '../components';
import {required, validEmail} from '../utils';

export default () => {

    return (
        <Form
            onSubmit={(values) => console.log(values)}
        >
            {() => (
                <div>
                    <FormField
                        label="Jméno a příjmení"
                        placeholder="Tvoje jméno"
                        name="name"
                        validate={[required]}
                        component={StringInput}
                    />
                    <FormField
                        label="E-mail"
                        placeholder="Tvůj e-mail"
                        name="e-mail"
                        validate={[required, validEmail]}
                        component={StringInput}
                    />
                    <FormField
                        name="message"
                        placeholder="Chceš nám něco vzkázat?"
                        component={StringInput}
                        area
                    />
                </div>
            )}
        </Form>
    );
};
