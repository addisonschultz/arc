import * as React from "react";
import { createRoot } from "react-dom/client";
import { getSelection, cleanContent } from "./utils";
import { Input } from "./components";

interface MiroTextItem {
  content: string;
  style: {
    fillColor: string;
    fillOpacity: string;
    fontFamily: string; // Replace with actual font family
    fontSize: number;
    textAlign: "left" | "center" | "right";
  };
}

interface TransformValues {
  radius: string;
  arc: string;
}

function App() {
  const [selection, setSelection] = React.useState<boolean | MiroTextItem>(
    false
  );

  const [transformValues, setTransformValues] = React.useState<TransformValues>(
    {
      radius: "500",
      arc: "20",
    }
  );

  React.useEffect(() => {
    const selection = getSelection();
    selection.then((value) => setSelection(value));
  }, []);

  return (
    <div className="grid wrapper">
      <div className="cs1 ce12">
        {!selection ? (
          <p>select 1 text element</p>
        ) : (
          <p
            style={{
              textAlign: "center",
              width: "100%",
            }}
          >
            {cleanContent(selection.content)
              .split("")
              .map((char, index) => {
                const degree =
                  transformValues.arc / selection.content.split("").length;

                return (
                  <span
                    key={index}
                    style={{
                      ...selection.style,
                      display: "inline-block",
                      height: `${transformValues.radius}px`,
                      transform: `rotate(${
                        degree * index - transformValues.arc / 2
                      }deg)`,
                      transformOrigin: `0 ${transformValues.radius}px 0`,
                    }}
                  >
                    {char}
                  </span>
                );
              })}
          </p>
        )}
      </div>
      <div className="cs1 ce12">
        <Input placeholder={"Radius"} defaultValue={"1000"} />
        <Input placeholder={"Arc"} defaultValue={"40"} />
      </div>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
