import HeadLink from "@/components/HeadLink"

function page() {
  return (
    <div className="max-w-[1600px] flex flex-col gap-14 lg:px-[60px] px-[10px] justify-center">
      <header>
        <HeadLink name="Resources" />
      </header>
      <main> Main</main>
    </div>
  )
}

export default page