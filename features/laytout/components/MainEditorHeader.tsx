import MainEditorNavigation from "./MainEditorNavigation";
import DrawerToggleButton from "./DrawerToggleButton";
import MainEditorContactLink from "./MainEditorContactLink";
import MainEditorTitle from "./MainEditorTitle";

function MainEditorHeader() {
  return (
    <header className="contents">
      <MainEditorTitle />
      <MainEditorNavigation />
      <DrawerToggleButton />
      <MainEditorContactLink />
    </header>
  );
}
export default MainEditorHeader;
