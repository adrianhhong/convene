import { Select } from "antd";
import "./RadiusSelect.less";

export default function RadiusSelect() {
  const { Option } = Select;

  return (
    <>
      <div className="radius">
        <Select defaultValue="5" style={{ width: 120 }}>
          <Option value="5">5</Option>
          <Option value="10">10</Option>
          <Option value="15">15</Option>
          <Option value="20">20</Option>
          <Option value="25">25</Option>
        </Select>
      </div>
    </>
  );
}
