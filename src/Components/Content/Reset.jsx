import React from 'react';

function Reset({ resetAllCounters }) {
    return (
        <button
            className="button"
            type="button"
            onClick={resetAllCounters}
        >
            Alle aantal opnieuw instellen
        </button>
    );
}

export default Reset;