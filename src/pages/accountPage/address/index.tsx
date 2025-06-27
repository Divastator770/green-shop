import { Button, Form, Input } from "antd"

const Address = () => {
  return (
    <div>
     <Form className="grid grid-cols-1 gap-2 md:grid-cols-2" >
      <Form.Item layout="vertical" className="" name="name" label="country/region">
        <Input placeholder="region/country"/>
      </Form.Item>
      <Form.Item layout="vertical" className="" name="name" label="state/address">
        <Input placeholder="state/address"/>
      </Form.Item>
      <Form.Item layout="vertical" className="" name="name" label="street/address">
        <Input placeholder="street/address"/>
      </Form.Item>
      <Form.Item layout="vertical" className="" name="name" label="extra/address">
        <Input placeholder="extra/address"/>
      </Form.Item>
      <Form.Item layout="vertical" className="" name="name" label="zip/code">
        <Input placeholder="zip/code"/>
      </Form.Item>
      <Form.Item layout="vertical" className="" name="name" label="town-city ">
        <Input placeholder="town-city"/>
      </Form.Item>
      <Button className="mt-[20px]" type="primary" htmlType="submit">save</Button>
      </Form> 
    </div>
  )
}

export default Address
