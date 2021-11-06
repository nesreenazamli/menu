import "./Tabs.css";
export default function StyledTabs(props) {
  return (
    <div style={{ display: "flex" }}>
      <div className="mytabs">
        <input type="radio" id="tabfree" name="mytabs" checked="checked" />
        <label className="label" for="tabfree">Newest</label>
        <div className="tab">
          <div>{props.tabone}</div>
        </div>

        <input type="radio" id="tabsilver" name="mytabs" />
        <label className="label" for="tabsilver">Meals</label>
        <div className="tab">
          <div>{props.tabtwo}</div>
        </div>

        <input type="radio" id="tabgold" name="mytabs" />
        <label className="label" for="tabgold">Desserts</label>
        <div className="tab">
          <div>{props.tabthree}</div>
        </div>  
      </div>

    </div>
  );
}
