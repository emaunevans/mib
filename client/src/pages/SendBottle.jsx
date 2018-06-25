import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { Input } from "../components/Form/Input";
import { TextArea } from "../components/Form/TextArea";
import { FormBtn } from "../components/Form/FormBtn";
import { List } from "../components/List/List";
import { ListItem } from "../components/List/ListItem";
import { Link } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const Messages = ({ secretData,
  user,
  onSubmit,
  onChange,
  errors,
  message
}) => (
    <Card className="container">
      <form action="/" onSubmit={onSubmit}>
        <h2 className="card-heading">Send a Message</h2>

        {/* {errors.summary && <p className="error-message">{errors.summary}</p>} */}

        <div className="field-line">
          <TextField
            floatingLabelText="Title"
            name="title"
            errorText={errors.title}
            onChange={onChange}
            value={message.title}
          />
        </div>

        <div className="field-line">
          <TextField
            floatingLabelText="Your Message"
            name="message"
            errorText={errors.body}
            onChange={onChange}
            value={message.body}
          />
        </div>



        <div className="button-line">
          <RaisedButton type="submit" label="Throw Your Message in a Bottle Out to Sea" primary />
        </div>


      </form>
    </Card>
  );

Messages.propTypes = {
  secretData: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired
};

export default Messages;
