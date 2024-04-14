export interface IMission {
  id?: string;
  title: string;
  address: string;
  content: string;
  mission: string;
  phoneNumber: string;
  score: number;
  participants: number;
  img: string;
  // status: number; //Coming, Happening, Expired // can be saved as numbers (0, 1, 2) // no need because startDate and endDate determine time
  // statusText: string; //can create a convertText
  startDate: Date | any;
  endDate: Date | any;
}

export interface IUserMission {
  id: string;
  missionId: string;
  userId: string;
  userStatus: string; //accepted, pending, denied, done, cancelled
  submission?: string; //anh nop
}
