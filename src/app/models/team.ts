import { Prospect } from "./prospect";

export class Team {
    _id: String;
    name: String;
    city: String;
    draft_picks: any;
    logo?: String;
    drafted_prospects?: Prospect[];
}
