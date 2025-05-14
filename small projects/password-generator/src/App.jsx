import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
    const [length, setLength] = useState(6)
    const [allowNum, setAllowNum] = useState(false)
    const [allowChar, setAllowChar] = useState(false)
    const [password, setPassword] = useState("")

    const passwordGenerator = useCallback(() => {
        let pass = ''
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        if (allowNum)
            str += '0123456789'
        if (allowChar)
            str += '~`!@#$%^&*()_-+={}[]|'
        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length)
            pass += str.charAt(char)
        }
        setPassword(pass)
    }, [length, allowChar, allowNum, setPassword])

    useEffect(() => {
        passwordGenerator()
    }, [length, allowChar, allowNum, passwordGenerator])

    const passRef = useRef(null)

    const copyToClipboard = useCallback(() => {
        passRef.current?.select()
        window.navigator.clipboard.writeText(password)
    }, [password])

    return (
        <>
            <div className="w-full max-w-md mx-auto shadow-xl rounded-lg px-4 py-6 my-8 bg-slate-800 border border-slate-700">
                <h1 className="text-2xl font-bold text-center mb-6 text-emerald-400">
                    Password Generator
                </h1>
                <div className="flex gap-2 mb-6">
                    <input
                        ref={passRef}
                        type="text"
                        value={password}
                        className="outline-none w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-600 text-emerald-400 font-mono"
                        placeholder="Password"
                        readOnly
                    />
                    <button
                        className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-bold rounded-lg transition-colors duration-200"
                        onClick={copyToClipboard}
                    >
                        Copy
                    </button>
                </div>
                <div className="flex flex-col gap-4 text-sm">
                    <div className="flex items-center gap-3">
                        <input
                            type="range"
                            id='rangeInput'
                            min={6}
                            max={69}
                            value={length}
                            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                            onChange={(e) => { setLength(Number(e.target.value)) }}
                        />
                        <label htmlFor="rangeInput" className="text-slate-300 whitespace-nowrap">
                            Length: <span className="text-emerald-400 font-bold">{length}</span>
                        </label>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id='numberInput'
                                checked={allowNum}
                                className="w-4 h-4 accent-emerald-500"
                                onChange={() => {
                                    setAllowNum((prev) => !prev)
                                }}
                            />
                            <label htmlFor="numberInput" className="text-slate-300">Numbers</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id='charInput'
                                checked={allowChar}
                                className="w-4 h-4 accent-emerald-500"
                                onChange={() => {
                                    setAllowChar((prev) => !prev)
                                }}
                            />
                            <label htmlFor="charInput" className="text-slate-300">Special Characters</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App