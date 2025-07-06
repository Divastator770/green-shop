import { Button, Form, Input } from "antd"
import toast from "react-hot-toast"

const Address = () => {
  const handleFinish = () => {
    toast.success("Address saqlandi")
  }

  return (
    <div>
      <Form
        className="grid grid-cols-1 gap-2 md:grid-cols-2"
        layout="vertical"
        onFinish={handleFinish} 
      >
        <Form.Item name="name" label="Country/Region">
          <Input placeholder="region/country" />
        </Form.Item>
        <Form.Item name="address" label="State/Address">
          <Input placeholder="state/address" />
        </Form.Item>
        <Form.Item name="street" label="Street/Address">
          <Input placeholder="street/address" />
        </Form.Item>
        <Form.Item name="extra" label="Extra/Address">
          <Input placeholder="extra/address" />
        </Form.Item>
        <Form.Item name="zip" label="ZIP/Code">
          <Input placeholder="zip/code" />
        </Form.Item>
        <Form.Item name="town" label="Town/City">
          <Input placeholder="town-city" />
        </Form.Item>

        <Button
          className="mt-[20px] !bg-green-500"
          type="primary"
          htmlType="submit" 
        >
          Save
        </Button>
      </Form>
    </div>
  )
}

export default Address
