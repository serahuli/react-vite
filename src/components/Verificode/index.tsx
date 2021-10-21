import { CSSProperties, FC, useEffect } from "react";
import { randomIndex } from "@/utils/random";
import styled from "styled-components";

type IVerifiCodeProps = {
  width?: number;
  height?: number;
  codeType?: "number" | "letter" | "numLetter" | "defined";
  codeArray?: string[];
  imgType?: "line" | "point";
  bgColor?: string;
  style?: CSSProperties;
};

const VerifiCode: FC<IVerifiCodeProps> = (props) => {
  const NUMBERS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const LETTERS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "o",
    "p",
    "q",
    "n",
    "m",
    "l",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const NUMLETTER = [...NUMBERS, ...LETTERS];

  const WIDTH: number = props.width ?? 100;
  const HEIGHT: number = props.height ?? 36;
  const CODETYPE: "number" | "letter" | "numLetter" | "defined" =
    props.codeType ?? "number";
  const BGCOLOR: string = props.bgColor ?? "#ffab00";
  const IMGTYPE: "line" | "point" = props.imgType ?? "point";

  let codeArray: string[] = [];
  switch (CODETYPE) {
    case "number":
      codeArray = NUMBERS;
      break;
    case "letter":
      codeArray = LETTERS;
      break;
    case "numLetter":
      codeArray = NUMLETTER;
      break;
    case "defined":
      codeArray = props.codeArray as string[];
      break;
  }
  useEffect(() => {
    drawBgColor();
  }, []);

  // 画背景颜色
  const drawBgColor: () => void = () => {
    const canvas: HTMLCanvasElement = document.getElementById(
      "verifiCode"
    ) as HTMLCanvasElement;
    const ctx: CanvasRenderingContext2D =
      canvas.getContext &&
      (canvas.getContext("2d") as CanvasRenderingContext2D);
    // 画背景颜色
    ctx.beginPath();
    ctx.fillStyle = BGCOLOR;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    ctx.closePath();
    // 画背景线条或点
    switch (IMGTYPE) {
      case "line":
        ctx.beginPath();
        ctx.closePath();
        break;
      case "point":
        ctx.beginPath();
        ctx.closePath();
        break;
    }
    ctx.beginPath();
    ctx.fillStyle = BGCOLOR;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    ctx.closePath();
  };

  return (
    <canvas
      id="verifiCode"
      width={WIDTH}
      height={HEIGHT}
      style={{ borderRadius: "4px" }}
    />
  );
};

export default VerifiCode;
