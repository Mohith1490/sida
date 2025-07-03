import Benifits from "../../../components/plans/Benifits";
import LegalFAQ from "../../../components/plans/LegalFAQ";
import LegalPlans from "../../../components/plans/LegalPlans";
import LegalSteps from "../../../components/plans/LegalSteps";
import PlanIntro from "../../../components/plans/PlanIntro";
import Plans from "../../../components/plans/Plans";


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