import { useState } from "react";

export function useCampaign(){

    const [campaigns, setCampaigns] = useState([]);

    function getRandomStatus() {
        const statuses = ["success", "pending", "cancelled"];
        const randomIndex = Math.floor(Math.random() * statuses.length);
        return statuses[randomIndex];
    }
    const addCampaign = (campaign) => {
        const status = getRandomStatus();
        setCampaigns([...campaigns, {...campaign, status}]);
    }

    return {campaigns, addCampaign};
}