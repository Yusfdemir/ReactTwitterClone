import {useSelector} from "react-redux";

export const useAppearance = () => useSelector(state => state.appeareance)