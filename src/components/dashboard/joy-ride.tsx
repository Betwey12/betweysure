export default function JoyRide() {
    return (
        <>
            {children}

                    {showTour && (
          <div className="absolute top-0 bg-black/50 inset-0">
            <Joyride
              steps={joyrideSteps}
              run={showTour}
              callback={handleTourEnd}
              continuous
              disableScrollParentFix
            />
          </div>
        )}


        </>

    )
}
