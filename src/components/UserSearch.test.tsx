import { render } from "@testing-library/react";
import axios from "axios"
import { UserSearch } from "./UserSearch";

jest.mock("axios")
const mockAxios = jest.mocked(axios);

describe("UserSearch", () => {
  beforeEach(() => {
    mockAxios.get.mockReset();
  })

  it("入力フォームに入力した内容でAPIリクエストが送信される", () => {
    const userInfo = {
      id: 1,
      name: "Taro"
    };
    const resp = { data: userInfo};
    mockAxios.get.mockResolvedValue(resp);

    render(<UserSearch/>)
  })
})