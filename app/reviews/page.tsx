import { IconButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import SectionTitle from "@/components/global/SectionTitle";
import ReviewCard from "@/components/reviews/ReviewCard";
import { deleteReviewAction, fetchProductReviewsByUser } from "@/utils/actions";

const Page = async () => {
  const reviews = await fetchProductReviewsByUser();
  if (reviews.length === 0) {
    return <SectionTitle text="No has escrito ninguna reseña todavía" />;
  }
  return (
    <>
      <SectionTitle text="Tus reseñas" />
      <section className="grid md:grid-cols-2 gap-8 mt-4">
        {reviews.map((review) => {
          const { comment, rating } = review;
          const { name, image } = review.product;
          const reviewInfo = { comment, rating, name, image };
          return (
            <ReviewCard reviewInfo={reviewInfo} key={review.id}>
              <DeleteReview reviewId={review.id} />
            </ReviewCard>
          );
        })}
      </section>
    </>
  );
};

const DeleteReview = ({ reviewId }: { reviewId: string }) => {
  const deleteReview = deleteReviewAction.bind(null, { reviewId });
  return (
    <FormContainer action={deleteReview}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
};

export default Page;
