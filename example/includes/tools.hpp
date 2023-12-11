#pragma once

#include <stdlib.h>

namespace example::tools {

    template<class T>
    inline auto compare(const T& l, const T& r) -> bool {
        if (l.size() == r.size()) {
            auto lit = l.begin();
            auto rit = r.begin();
            while (lit != l.end() && rit != r.end()) {
                if (!(*lit == *rit)) {
                    return false;
                }
                lit++;
                rit++;
            }
            return true;
        }
        return false;
    }

    template<class T>
    inline auto compare2(const T& l, const T& r) -> bool {
        if (l.size() == r.size()) {
            auto ri = r.begin();
            auto li = l.begin();
            while (li != l.end() && ri != r.end()) {
                if (!compare(*li, *ri)) {
                    return false;
                }
                li++;
                ri++;
            }
            return true;
        }
        return false;
    };

}
