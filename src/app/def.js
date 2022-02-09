import ShuffleIcon from '@mui/icons-material/Shuffle';
import TableChartIcon from '@mui/icons-material/TableChart';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';
import Looks5Icon from '@mui/icons-material/Looks5';
import MergeIcon from '@mui/icons-material/Merge';
import CreateIcon from '@mui/icons-material/Create';
import BlenderIcon from '@mui/icons-material/Blender';
import QuizIcon from '@mui/icons-material/Quiz';
import AdjustIcon from '@mui/icons-material/Adjust';
import GridGoldenratioIcon from '@mui/icons-material/GridGoldenratio';
import Grid4x4Icon from '@mui/icons-material/Grid4x4';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import ConstructionIcon from '@mui/icons-material/Construction';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import DrawsWindow from "../components/windows/DrawsWindow";
import DrawMapWindow from "../components/windows/DrawMapWindow";
import OnesWindow from "../components/windows/OnesWindow";
import PeersWindow from "../components/windows/PeersWindow";
import ThreesWindow from "../components/windows/ThreesWindow";
import FoursWindow from "../components/windows/FoursWindow";
import FivesWindow from "../components/windows/FivesWindow";
import MergePeersThreesWindow from "../components/windows/MergePeersThreesWindow";
import CreatePeerWindow from "../components/windows/CreatePeerWindow";
import CombinationsWindow from "../components/windows/CombinationsWindow";
import TestNumbersWindow from "../components/windows/TestNumbersWindow";
import PeriodicityWindow from "../components/windows/PeriodicityWindow";
import SetsWindow from "../components/windows/SetsWindow";
import GridWindow from "../components/windows/GridWindow";
import NumberGeneratorWindow from "../components/windows/NumberGeneratorWindow";
import BuildSystemWindow from "../components/windows/BuildSystemWindow";
import CatalogsWindow from "../components/windows/CatalogsWindow";

export const ITEM_TOOLS_1 = [
    {
        icon: ShuffleIcon,
        label: "draws",
        component: DrawsWindow
    },
    {
        icon: TableChartIcon,
        label: "draw-map",
        component: DrawMapWindow
    }
];

export const ITEM_TOOLS_STAT = [
    {
        icon: LooksOneIcon,
        label: "one-peer",
        component: OnesWindow
    },
    {
        icon: LooksTwoIcon,
        label: "two-peer",
        component: PeersWindow
    },
    {
        icon: Looks3Icon,
        label: "three-peer",
        component: ThreesWindow
    },
    {
        icon: Looks4Icon,
        label: "four-peer",
        component: FoursWindow
    },
    {
        icon: Looks5Icon,
        label: "five-peer",
        component: FivesWindow
    }
];

export const ITEM_TOOLS_TOOLS = [
    {
        icon: MergeIcon,
        label: "merge-peers-threes",
        component: MergePeersThreesWindow
    },
    {
        icon: CreateIcon,
        label: "create-peer",
        component: CreatePeerWindow
    },
    {
        icon: BlenderIcon,
        label: "combinations",
        component: CombinationsWindow
    },
    {
        icon: QuizIcon,
        label: "test-numbers",
        component: TestNumbersWindow
    },
    {
        icon: AdjustIcon,
        label: "periodicity",
        component: PeriodicityWindow,
    },
    {
        icon: GridGoldenratioIcon,
        label: "set",
        component: SetsWindow,
    },
    {
        icon: Grid4x4Icon,
        label: "grid",
        component: GridWindow
    },
    {
        icon: FormatListNumberedIcon,
        label: "number-generator",
        component: NumberGeneratorWindow
    }
];

export const ITEM_TOOLS_SYSTEM = [
    {
        icon: ConstructionIcon,
        label: "build-system",
        component: BuildSystemWindow
    },
    {
        icon: DriveFolderUploadIcon,
        label: "catalog-of-system",
        component: CatalogsWindow
    }
];

export const ITEM_TOOLS_ABOUT = [];

export const ITEMS_NAV = [
    {
        label: 'game-nav',
        index: 0,
        toolPanel: []
    },
    {
        label: 'draw-nav',
        index: 1,
        toolPanel: ITEM_TOOLS_1
    },
    {
        label: 'stat-nav',
        index: 2,
        toolPanel: ITEM_TOOLS_STAT
    },
    {
        label: 'tools-nav',
        index: 3,
        toolPanel: ITEM_TOOLS_TOOLS
    },
    {
        label: 'sys-nav',
        index: 4,
        toolPanel: ITEM_TOOLS_SYSTEM
    },
    {
        label: 'about-nav',
        index: 5,
        toolPanel: ITEM_TOOLS_ABOUT
    }
];