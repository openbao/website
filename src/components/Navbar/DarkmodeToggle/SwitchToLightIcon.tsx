import { faSun } from "@fortawesome/free-solid-svg-icons";
import Icon from './Icon';

export default function SwitchToLight() {
    return (
        <div style={{
            display: "var(--show-in-dark-mode)",
        }}
        >
            <Icon icon={faSun} />
        </div>
    )
}