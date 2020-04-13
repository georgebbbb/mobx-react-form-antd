import React from 'react';
import Form from 'antd/lib/form';
import Tooltip from 'antd/lib/tooltip';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react';

const { Item } = Form;

const Item = observer(({ labelCol, wrapperCol, field, required, children, extra, question }) => {
  return (
    <Form.Item
      labelCol={labelCol}
      wrapperCol={wrapperCol}
      required={required}
      label={
        <span>
          {field.label}
          {question ? (
            <Tooltip title={question}>
              <QuestionCircleOutlined />
            </Tooltip>
          ) : null}
        </span>
      }
      validateStatus={field.error ? 'error' : null}
      help={field.error}
      extra={extra}
    >
      {children}
    </Form.Item>
  );
});

export default Item;
