import {
  isRouteErrorResponse,
  useRouteError,
} from "react-router";
import NotFoundPage from "./NotFoundPage";

const ErrorPage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 404) {
    return <NotFoundPage />;
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <section className="text-center">
        <h1 className="text-5xl font-bold text-red-500">
          Có lỗi xảy ra
        </h1>

        <p className="mt-4 text-gray-600">
          Trang đang gặp lỗi, vui lòng thử lại sau.
        </p>
      </section>
    </main>
  );
};

export default ErrorPage;