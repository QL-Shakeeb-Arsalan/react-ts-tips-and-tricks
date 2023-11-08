interface Dont {
  name: String;
  id: Number;
  address: object;
}

interface Dos {
  name: string;
  id: number;
  address: {
    pinCode: number;
    state: string;
    // TODO etc................
  };
  
}

type status = "pending" | "start";
