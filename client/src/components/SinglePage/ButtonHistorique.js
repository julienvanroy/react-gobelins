import React from 'react';

const ButtonHistorique = (props) => {
  return (
    <div data-toggle="buttons" role="group"
         className="btn-group-toggle float-right btn-group">
      <label id="0"
             className={`btn-simple btn btn-info btn-sm${props.options === "1" ? " active" : ""}`}>
        <input className="d-none" name="options1" type="radio" value="1"
               checked={props.options === "1"}
               onChange={(e) => props.handleChange(e)}/>
        <span
          className="d-none d-sm-block d-md-block d-lg-block d-xl-block">1j</span>
        <span className="d-block d-sm-none">
                    </span>
      </label>
      <label id="1"
             className={`btn-simple btn btn-info btn-sm${props.options === "7" ? " active" : ""}`}>
        <input className="d-none" name="options2" type="radio" value="7"
               checked={props.options === "7"}
               onChange={(e) => props.handleChange(e)}/>
        <span
          className="d-none d-sm-block d-md-block d-lg-block d-xl-block">7j</span>
        <span className="d-block d-sm-none">
                    </span>
      </label>
      <label id="2"
             className={`btn-simple btn btn-info btn-sm${props.options === "14" ? " active" : ""}`}>
        <input className="d-none" name="options3" type="radio" type="radio"
               value="14" checked={props.options === "14"}
               onChange={(e) => props.handleChange(e)}/>
        <span
          className="d-none d-sm-block d-md-block d-lg-block d-xl-block">14j</span>
        <span className="d-block d-sm-none">
                        </span>
      </label>
    </div>
  );
}

export default ButtonHistorique;
