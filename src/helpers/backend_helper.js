import axios from "axios"
import { del, get, post, put } from "./api_helper"
import * as url from "./url_helper"

const getAttorneysData = () => get(url.GET_ATTORNEYS_DATA)

export { getAttorneysData }
