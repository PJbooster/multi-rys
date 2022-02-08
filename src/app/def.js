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

export const ITEM_TOOLS_1 = [
    {
        icon: ShuffleIcon,
        label: "draws"
    },
    {
        icon: TableChartIcon,
        label: "draw-map"
    }
];

export const ITEM_TOOLS_STAT = [
    {
        icon: LooksOneIcon,
        label: "one-peer"
    },
    {
        icon: LooksTwoIcon,
        label: "two-peer"
    },
    {
        icon: Looks3Icon,
        label: "three-peer"
    },
    {
        icon: Looks4Icon,
        label: "four-peer"
    },
    {
        icon: Looks5Icon,
        label: "five-peer"
    }
];

export const ITEM_TOOLS_TOOLS = [
    {
        icon: MergeIcon,
        label: "merge-peers-threes"
    },
    {
        icon: CreateIcon,
        label: "create-peer"
    },
    {
        icon: BlenderIcon,
        label: "combinations"
    },
    {
        icon: QuizIcon,
        label: "test-numbers"
    },
    {
        icon: AdjustIcon,
        label: "periodicity"
    },
    {
        icon: GridGoldenratioIcon,
        label: "set"
    },
    {
        icon: Grid4x4Icon,
        label: "grid"
    },
    {
        icon: FormatListNumberedIcon,
        label: "number-generator"
    }
];

export const ITEM_TOOLS_SYSTEM = [
    {
        icon: ConstructionIcon,
        label: "build-system"
    },
    {
        icon: DriveFolderUploadIcon,
        label: "catalog-of-system"
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