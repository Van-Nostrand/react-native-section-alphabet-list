import { AlphabetListProps, ISectionData } from "../AlphabetList/types"

export interface ListLetterIndexProps {
    onPressLetter: (sectionIndex: number) => void;
    sectionData: ISectionData[];
    indexLetterStyle?: AlphabetListProps["indexLetterStyle"],
    indexLetterContainerStyle?: AlphabetListProps["indexLetterContainerStyle"],
    indexContainerStyle?: AlphabetListProps["indexContainerStyle"],
    renderCustomIndexLetter?: AlphabetListProps["renderCustomIndexLetter"],
}
