import Benifits from "../../../component/plans/Benifits";
import LegalFAQ from "../../../component/plans/LegalFAQ";
import LegalPlans from "../../../component/plans/LegalPlans";
import LegalSteps from "../../../component/plans/LegalSteps";
import PlanIntro from "../../../component/plans/PlanIntro";
import Plans from "../../../component/plans/Plans";


export default function page(){
    return(
        <>
         <PlanIntro/>
         <LegalPlans/>
         <LegalSteps/>
         <Benifits/>
         <Plans/>
         <LegalFAQ/>
        </>
    )
}