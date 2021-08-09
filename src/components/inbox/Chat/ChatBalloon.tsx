/** @jsxImportSource @emotion/react */
import tw from "twin.macro";

interface IChatBalloon {
  position?: "left" | "right";
  text?: string;
}

export default function ChatBalloon({ position, text }: IChatBalloon) {
  return (
    <div>
      <p
        tw="font-semibold text-green-300"
        style={{ textAlign: position === "left" ? "left" : "right" }}
      >
        {position === "left" ? "John Doe" : "You"}
      </p>
      <div
        tw="flex mb-2.5"
        style={{
          justifyContent: position === "left" ? "flex-start" : "flex-end",
        }}
      >
        <div
          tw="w-3/5 h-auto p-3 rounded-xl"
          style={{
            backgroundColor: position === "left" ? "#EEDCFF" : "#D2F2EA",
          }}
        >
          <p style={{ fontSize: "0.8em" }}>
            {text ||
              `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          error dolorem repudiandae tempore illum earum necessitatibus ad
          consectetur! Amet, unde iusto. Rerum amet enim obcaecati reprehenderit
          voluptatum vitae iure eos.`}
          </p>
        </div>
      </div>
    </div>
  );
}
