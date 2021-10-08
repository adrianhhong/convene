import { Select } from "antd";
import "./RadiusSelect.less";

export default function RadiusSelect({ radius, radiusList, onRadiusChange }) {
  const { Option } = Select;

  return (
    <>
      <div className="radius">
        <Select style={{ width: 75 }} onChange={onRadiusChange} value={radius}>
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
