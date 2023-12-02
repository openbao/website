import { faMoon } from "@fortawesome/free-solid-svg-icons";
import Icon from './Icon';

export default function SwitchToDark() {
    return (
        <div style={{
            display: "var(--show-in-light-mode)",
        }}
        >
            <Icon icon={faMoon} />
        </div>
    )
}