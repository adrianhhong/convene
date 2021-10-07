import { useState } from "react";
import { Select } from "antd";
import "./RadiusSelect.less";

export default function RadiusSelect() {
  const { Option } = Select;
  const radiusList = ["5", "10", "15", "20", "25"];
  const [radius, setRadius] = useState(radiusList[0]);

  return (
    <>
      <div className="radius">
        <Select
          style={{ width: 75 }}
          onChange={(value) => {
            setRadius(value);
          }}
          value={radius}
        >
          <Option value={radiusList[0]} key={radiusList[0]}>
            {radiusList[0]}
          </Option>
          <Option value={radiusList[1]} key={radiusList[1]}>
            {radiusList[1]}
          </Option>
          <Option value={radiusList[2]} key={radiusList[2]}>
            {radiusList[2]}
          </Option>
          <Option value={radiusList[3]} key={radiusList[3]}>
            {radiusList[3]}
          </Option>
          <Option value={radiusList[4]} key={radiusList[4]}>
            {radiusList[4]}
          </Option>
        </Select>
      </div>
    </>
  );
}
