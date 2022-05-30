import { Component } from "@angular/core";
import { LanguageDef, Languages, NestedNavItem } from "../../model/navigation";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent {
  navigation: NestedNavItem[] = [
    {
      label: "Company",
      items: [
        { label: "About" },
        { label: "Careers" },
        { label: "Advertising" },
        { label: "Small Business" },
      ],
    },
    {
      label: "Help",
      items: [
        { label: "Safety Center" },
        { label: "Knowledge Base" },
        { label: "Contact Us" },
      ],
    },
    {
      label: "Legal",
      items: [{ label: "Community Guidelines" }, { label: "Privacy & Terms" }],
    },
  ];

  languages: LanguageDef[] = [
    { label: "English", code: "en_US" },
    { label: "Spanish", code: "es_PE" },
  ];

  selectedLanguage: Languages = "en_US";
}
