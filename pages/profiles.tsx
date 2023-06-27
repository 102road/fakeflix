import useCurrentUser from "@/hooks/useCurrentUser";

import { useRouter } from "next/router";

import { authOptions } from "./api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

const Profiles = () => {
  const router = useRouter();
  const { data: user } = useCurrentUser();

  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex flex-col">
        <h1 className="text-center text-3xl text-white md:text-6xl">
          Who is watching?
        </h1>
        <div className="mt-10 flex items-center justify-center gap-8">
          <div
            onClick={() => {
              router.push("/");
            }}
          >
            <div className="group mx-auto w-44 flex-row">
              <div className="justify center group-hover:curosor-pointer flex h-44 w-44 items-center overflow-hidden rounded-md border-2 border-transparent group-hover:border-white">
                <img src="/images/default-blue.png" alt="Profile" />
              </div>
              <div className="mt-4 text-center text-2xl text-gray-400 group-hover:text-white">
                {user?.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
