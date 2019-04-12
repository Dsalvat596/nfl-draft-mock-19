import { Prospect } from "./prospect";

export class Team {
    name: String;
    city: String;
    draft_picks: any;
    logo?: String;
    drafted_prospects?: Prospect[];
}
