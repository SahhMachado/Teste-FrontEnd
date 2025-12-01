import { create } from "zustand"

type Tab = "repos" | "starred"

export type RepoTypeFilter =
  | "all"
  | "sources"
  | "forks"
  | "archived"
  | "mirrors";

export type LanguageFilter =
  | "all"
  | "java"
  | "ts"
  | "html"
  | "css";

type useStoreProps = {
  search: string;
  setSearch: (value: string) => void;

  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;

  type: RepoTypeFilter[]
  toggleRepoType: (type: RepoTypeFilter) => void;

  language: LanguageFilter[]
  toggleLanguage: (lang: LanguageFilter) => void;
};

export const useStore = create<useStoreProps>((set) => ({
  search: "",
  setSearch: (value) => set({ search: value }),

  activeTab: "repos",
  setActiveTab: (tab) => set({ activeTab: tab }),

  type: [],
  toggleRepoType: (type) =>
    set((state) => ({
      type: state.type.includes(type)
        ? state.type.filter((t) => t !== type)
        : [...state.type, type],
    })),

  language: [],
  toggleLanguage: (lang) =>
    set((state) => ({
      language: state.language.includes(lang)
        ? state.language.filter((l) => l !== lang)
        : [...state.language, lang],
    })),
}));
