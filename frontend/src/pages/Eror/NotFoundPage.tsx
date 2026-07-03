import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <section className="max-w-xl w-full text-center">
        <h1 className="text-8xl md:text-9xl font-bold text-red-500">
          404
        </h1>

        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-900">
          Không tìm thấy trang
        </h2>

        <p className="mt-3 text-gray-600">
          Trang bạn đang tìm có thể đã bị xoá, đổi đường dẫn hoặc không tồn tại.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto rounded-lg bg-red-500 px-6 py-3 text-white font-medium hover:bg-red-600 transition"
          >
            Về trang chủ
          </Link>

          <Link
            to="/products"
            className="w-full sm:w-auto rounded-lg border border-gray-300 px-6 py-3 text-gray-700 font-medium hover:bg-gray-100 transition"
          >
            Xem sản phẩm
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFoundPage;