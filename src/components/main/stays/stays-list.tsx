import StayCard from "./stay-card";

/**
 * Renders a list of stays.
 * @returns The rendered Stays list component.
 */
export default function StaysList() {
  return (
    <div className="grid grid-flow-row auto-rows-fr gap-6 pb-10">
      <StayCard
        title={"Fully Furnished Smart Studio Apartment"}
        rating={4.8}
        host={"Mercedes Vito"}
        guests={2}
        bedrooms={1}
        bathrooms={2}
        type={"Entire Studio Apartment"}
        image={
          "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <StayCard
        title={"Furnished Apartment"}
        rating={3.8}
        host={"Mercedes Vito"}
        guests={4}
        bedrooms={3}
        bathrooms={2}
        type={"Entire Home"}
        image={
          "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <StayCard
        title={"Classic Studio Apartment"}
        rating={4.0}
        host={"Mercedes Vito"}
        guests={2}
        bedrooms={2}
        bathrooms={2}
        type={"Share With Super Host"}
        image={
          "https://images.unsplash.com/photo-1588471980726-8346cb477a33?q=80&w=3170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <StayCard
        title={"Furnished Apartment"}
        rating={3.8}
        host={"Mercedes Vito"}
        guests={4}
        bedrooms={3}
        bathrooms={2}
        type={"Entire Home"}
        image={
          "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
    </div>
  );
}
