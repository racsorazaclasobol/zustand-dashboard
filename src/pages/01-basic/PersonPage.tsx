import { WhiteCard } from "../../components";
import { usePersonStore } from "../../stores";

export const PersonPage = () => {
    const firstName = usePersonStore((state) => state.firstName);
    const lastName = usePersonStore((state) => state.lastName);

    const setFirstName = usePersonStore((state) => state.setFirstName);
    const setlastName = usePersonStore((state) => state.setlastName);

    return (
        <>
            <h1>Persona</h1>
            <p>
                Información que se compartirá a otro store, Session Storage y
                Firebase
            </p>
            <hr />

            <WhiteCard className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px]">
                    <form>
                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                                        Primer Nombre
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                        value={firstName}
                                        placeholder="Primer Nombre"
                                        onChange={(e) =>
                                            setFirstName(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                                        Apellido
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={lastName}
                                        onChange={(e) =>
                                            setlastName(e.target.value)
                                        }
                                        id="lastName"
                                        placeholder="Apellido"
                                    />
                                </div>
                            </div>
                        </div>

                        <pre className="bg-gray-200 p-5 rounded-[20px]">
                            {JSON.stringify(
                                {
                                    firstName: firstName,
                                    lastName: lastName,
                                },
                                null,
                                2
                            )}
                        </pre>
                    </form>
                </div>
            </WhiteCard>
        </>
    );
};
