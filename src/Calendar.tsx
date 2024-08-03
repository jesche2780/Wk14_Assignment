import AddButton from "./AddButton";
import DateView from "./DateView";
import PlusSolid from "./assets/plus-solid.svg"

export default function Calendar() {
  return (
    <div>
      <div className="container-fluid text-center ">
        <div className="rowC" style={{ height: "50px" }}>
          <div className="col border" style={{ alignContent: "center" }}>
            <DateView />
          </div>
        </div>
        <div>
          <AddButton icon={PlusSolid} onClick={() => alert("This is a button!")}/>
        </div>
        <div className="row" style={{ height: "100px" }}>
          <div className="col border" defaultValue={"Sunday"}>
            Sunday
          </div>
          <div className="col border" defaultValue={"Monday"}>
            Monday
          </div>
          <div className="col border" defaultValue={"Tuesday"}>
            Tuesday
          </div>
          <div className="col border" defaultValue={"Wednesday"}>
            Wednesday
          </div>
          <div className="col border" defaultValue={"Thursday"}>
            Thursday
          </div>
          <div className="col border" defaultValue={"Friday"}>
            Friday
          </div>
          <div className="col border" defaultValue={"Saturday"}>
            Saturday
          </div>
        </div>
        <div className="row" style={{ height: "100px" }}>
          <div className="col border" style={{ alignContent: "center" }}></div>
          <div className="col border" style={{ alignContent: "center" }}></div>
          <div className="col border" style={{ alignContent: "center" }}></div>
          <div className="col border" style={{ alignContent: "center" }}></div>
          <div className="col border" style={{ alignContent: "center" }}>
            1
          </div>
          <div className="col border" style={{ alignContent: "center" }}>
            2
          </div>
          <div className="col border" style={{ alignContent: "center" }}>
            3
          </div>
        </div>
        <div className="row" style={{ height: "100px" }}>
          <div className="col border" style={{ alignContent: "center" }}>
            4
          </div>
          <div className="col border" style={{ alignContent: "center" }}>
            5
          </div>
          <div className="col border" style={{ alignContent: "center" }}>
            6
          </div>
          <div className="col border" style={{ alignContent: "center" }}>
            7
          </div>
          <div className="col border" style={{ alignContent: "center" }}>
            8
          </div>
          <div className="col border" style={{ alignContent: "center" }}>
            9
          </div>
          <div className="col border" style={{ alignContent: "center" }}>
            10
          </div>
        </div>
        <div className="row" style={{ height: "100px" }}>
          <div className="col border" style={{ alignContent: "center" }}>
            11
          </div>
          <div className="col border" style={{ alignContent: "center" }}>
            12
          </div>
          <div className="col border" style={{ alignContent: "center" }}>
            13
          </div>
          <div className="col border" style={{ alignContent: "center" }}>
            14
          </div>
          <div className="col border" style={{ alignContent: "center" }}>
            15
          </div>
          <div className="col border" style={{ alignContent: "center" }}>
            16
          </div>
          <div className="col border" style={{ alignContent: "center" }}>
            17
          </div>
        </div>
        <div className="row" style={{ height: "100px" }}>
          <div className="col border" style={{ alignContent: "center" }}>
            18
          </div>
          <div className="col border" style={{ alignContent: "center" }}>
            19
          </div>
          <div className="col border" style={{ alignContent: "center" }}>
            20
          </div>
          <div className="col border" style={{ alignContent: "center" }}>
            21
          </div>
          <div className="col border" style={{ alignContent: "center" }}>
            22
          </div>
          <div className="col border" style={{ alignContent: "center" }}>
            23
          </div>
          <div className="col border" style={{ alignContent: "center" }}>
            24
          </div>
        </div>
        <div className="row" style={{ height: "100px" }}>
          <div className="col border" style={{ alignContent: "center" }}>
            25
          </div>
          <div className="col border" style={{ alignContent: "center" }}>
            26
          </div>
          <div className="col border" style={{ alignContent: "center" }}>
            27
          </div>
          <div className="col border" style={{ alignContent: "center" }}>
            28
          </div>
          <div className="col border" style={{ alignContent: "center" }}>
            29
          </div>
          <div className="col border" style={{ alignContent: "center" }}>
            30
          </div>
          <div className="col border" style={{ alignContent: "center" }}>
            31
          </div>
        </div>
      </div>
    </div>
  );
}
