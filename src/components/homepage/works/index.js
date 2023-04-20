import Card from './card'

const steps = [
    { id: 'Step 1', name: 'Job details', href: '#', status: 'upcoming' },
    { id: 'Step 2', name: 'Application form', href: '#', status: 'current' },
    { id: 'Step 3', name: 'Preview', href: '#', status: 'upcoming' },
  ]
  
export default function Works() {
  return (
    <main className='h-[1115px] lg:px-36 md:px-20 px-10 pt-28'>
      <h2 className='title-gradient text-[80px] font-bold pb-24'>
        Our Works
      </h2>
      <div className='flex justify-between'>
        <Card />
      </div>
      <nav aria-label="Progress" className="pt-20">
        <ol role="list" className="space-y-4 md:flex m-auto md:space-y-0 md:space-x-8 w-72">
          {steps.map((step) => (
            <li key={step.name} className="md:flex-1">
              {step.status === 'complete' ? (
                <a
                  href={step.href}
                  className="group flex flex-col border-l-4 border-indigo-600 py-2 pl-4 hover:border-indigo-800 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0"
                >
                </a>
              ) : step.status === 'current' ? (
                <a
                  href={step.href}
                  className="flex flex-col border-l-4 border-indigo-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0"
                  aria-current="step"
                >
                </a>
              ) : (
                <a
                  href={step.href}
                  className="group flex flex-col border-l-4 border-gray-200 py-2 pl-4 hover:border-gray-300 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0"
                >
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </main>
  )
}